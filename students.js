class StudentPrototype {
    constructor(name, address, phone, course) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.course = course;
    }

}

class Student extends StudentPrototype {
      constructor(name, address, phone, course) {
      super(name, address, phone, course)
      }

      getInfo() {
      return 'Name: ' + this.name + '\n' +
              'Address: ' + this.address + '\n' +
              'Phone: ' + this.phone + '\n' +
              'Course: ' + this.course
          }
}



async function getData() {
                try {
                    let response = await fetch('students.txt');
                    if(response.status !== 200) {
                        throw new Error("Error while reading file.");
                    }
                    let text = await response.text();
                    textArea.innerHTML = text;
                } catch (err) {
                    textArea.innerHTML = 'Fetch problem: ' + err.message;
                }
            }