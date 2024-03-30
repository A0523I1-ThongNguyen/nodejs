class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getAge() {
    return `so tuoi : ` + this.age;
  }
  setName(name) {
    this.name = name;
  }
}

const p1 = new Person("Ngan", 21);
console.log(p1.age);
console.log(p1.getAge());
console.log(p1.name);
p1.setName("Giang");
console.log(p1.name);

function example() {
  console.log(x); // Kết quả: undefined
  //   console.log(y); // Lỗi: y is not defined

  var x = 1;
  let y = 2;

  if (true) {
    var x = 3; // Kết quả: 3 (biến x bị ghi đè)
    let y = 4; // Kết quả: 4 (biến y trong khối if có phạm vi khác)
    console.log(x); // Kết quả: 3
    console.log(y); // Kết quả: 4
  }

  console.log(x); // Kết quả: 3 (biến x bị ghi đè)
  console.log(y); // Kết quả: 2 (biến y trong hàm không bị ảnh hưởng)
}

example();
