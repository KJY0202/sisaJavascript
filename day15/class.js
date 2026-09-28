class Car {
  price;
  year;
  mileage;
  hasAccident;
  hasFlooding;

  //만들기 !
  constructor(a, b, c) {
    this.price = a;
    this.year = b;
    this.mileage = c;
    this.hasAccident = false;
    this.hasFlooding = false;
  }
}

const a = new Car(10000, 2010, 10000);
console.log({ ...a });
const b = new Car(30000, 2000, 50000);
console.log({ ...b });

// 동물병원 동물 기록 클래스

class medicalRecord {
  #visitedDate;
  #examine;
  #doctorName;

  constructor(a, b, c) {
    this.setVisitedDate(a); //1970-01-01 ~ 2026-09-18
    this.#examine = b;
    this.#doctorName = c;
  }
  //yyyy-mm-dd //Regex (문자형식체크 타입)
  setVisitedDate(a) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(a)) {
      throw new Error(
        "날짜 형식이 올바르지 않습니다. yyyy-mm-dd 형식이어야 합니다.",
      );
    }
    const date = new Date(a);
    const today = new Date();
    if (date > today) {
      throw new Error("방문 날짜는 오늘 이전이어야 합니다.");
    }
    this.#visitedDate = a;
  }
}

//진료기록이랑 동물이랑 연결

class Animal {
  #age;
  #name;
  #species;
  #medical_records;

  constructor(a, b, c) {
    this.setAge(b);
    this.#name = a;
    this.#species = c;
    this.#medical_records = ["초기 기록"];
  }

  setAge(age) {
    if (age < 0) {
      throw new Error("어떻게 나이가 음수냐 ㅋㅋ");
    }
    this.#age = age;
  }

  setMedicalRecords(a, b, c) {
    this.#medical_records.push(new medicalRecord(a, b, c));
  }
}

const myAnimal = new Animal("호돌이", 99, "호랑이");

myAnimal.setMedicalRecords("2023-01-01", "정기검진", "김수의사");
