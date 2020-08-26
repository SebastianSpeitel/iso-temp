class A<T extends number | string = number | string> {
  attr: T;

  set<U extends T>(a: U): A<U> {
    this.attr = a;
    return (this as unknown) as A<U>;
  }

  printNumber(this: A<number>) {
    console.log(this.attr);
  }
}

let o = new A();
o.printNumber(); // Fails;

let o2 = o.set(3);
o2.printNumber(); //Works!!!;
