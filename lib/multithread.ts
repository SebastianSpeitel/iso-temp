interface Options {
  name?: string;
  timeout?: number;
}

interface Task<R> {
  id: number;
  worker: Worker;
  res(value: R): void;
  rej(reason: any): void;
}

class Runner<A extends any[] = [], R = void> {
  #fun: (...args: A) => R;
  #worker: Worker & { running?: boolean };
  #tasks = new Map<number, Task<R>>();
  #options: Required<Options>;

  constructor(fun: (...args: A) => R, opts?: Options) {
    this.#options = { name: fun.name, timeout: 10000, ...opts };
    this.#fun = fun;
    this.init();
  }

  init() {
    this.#worker?.terminate();
    this.#worker = new Worker(
      "data:," +
        encodeURIComponent(
          `const tasks=new Map;onmessage=({data:d})=>{if(d.args)postMessage({taskId:d.taskId,result:(${this.#fun.toString()})(...d.args)});}`
        ),
      { name: this.#options.name }
    );
    this.#worker.addEventListener("message", e => {
      if (e.data.result) {
        this.#worker.running = false;
        this.#tasks.get(e.data.taskId)?.res(e.data.result);
      }
    });
  }

  run(...args: A): Promise<R> {
    if (this.#worker.running) this.init();
    const worker = this.#worker;
    worker.running = true;
    return new Promise((res, rej) => {
      const taskId = window.setTimeout(() => {
        this.#tasks.delete(taskId);
        rej(new Error("Timeout"));
      }, this.#options.timeout);
      this.#tasks.set(taskId, { id: taskId, worker, res, rej });
      worker.postMessage({ taskId, args });
    });
  }
}

export function multithread<A extends any[], R = void>(
  fun: (...args: A) => R,
  opts: Options = {}
) {
  const runner = new Runner(fun, opts);
  return Object.assign((...args: A) => runner.run(...args), { runner });
}
