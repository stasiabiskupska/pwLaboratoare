// https://jsoneditoronline.org/#left=cloud.c439a45cc0da4a44936831cdbdd98c55


// Используя структуру из предыдущей задачи, создайте массив сотрудников и напишите следующий функционал:
// вывод в странице всех сотрудников
// вывод в отдельный HTML блок общей информации о ЗП сотрудников
// средняя ЗП по всем сотрудникам
// минимальная ЗП
// максимальная ЗП
// сумма всех ЗП

const app = document.getElementById("app");
const personsList = document.getElementById("persons");
const salariesList = document.getElementById("salaries");
const statistics = document.getElementById("statistics");

const persons = [
    {
      "name": "Billie",
      "sureName": "Glenn",
      "patronymic": "Rios",
      "birthday": "1994-07-30",
      "email": "riosglenn@fleetmix.com",
      "gender": "male",
      "privateInfo": {
        "idnp": 3114110538981
      },
      "address": {
        "country": "Moldova",
        "city": "Wright",
        "street": "Clara Street",
        "block": 39,
        "apartmen": 87
      },
      "homePhone": "+231 (880) 551-2008",
      "workContract": {
        "position": "developer",
        "workContractStartFrom": "2009-06-10",
        "workConditions": {
          "salary": 362756,
          "totalWorkExperience": 12,
          "department": "COLAIRE department",
          "workSchedule": {
            "start": "2021-07-19T04:14:18 -03:00",
            "end": "2020-01-07T06:46:04 -03:00",
            "lunch": {
              "start": "12:00",
              "end": "13:00"
            }
          }
        }
      }
    },
    {
      "name": "Ewing",
      "sureName": "Norman",
      "patronymic": "Gilmore",
      "birthday": "1994-04-25",
      "email": "gilmorenorman@colaire.com",
      "gender": "male",
      "privateInfo": {
        "idnp": 3799251755766
      },
      "address": {
        "country": "Moldova",
        "city": "Lemoyne",
        "street": "Liberty Avenue",
        "block": 57,
        "apartmen": 26
      },
      "homePhone": "+231 (947) 569-2707",
      "workContract": {
        "position": "developer",
        "workContractStartFrom": "2000-11-23",
        "workConditions": {
          "salary": 452614,
          "totalWorkExperience": 12,
          "department": "GOLOGY department",
          "workSchedule": {
            "start": "2016-12-31T06:56:49 -03:00",
            "end": "2015-12-12T04:51:26 -03:00",
            "lunch": {
              "start": "12:00",
              "end": "13:00"
            }
          }
        }
      }
    },
    {
      "name": "Marsh",
      "sureName": "Huff",
      "patronymic": "Sharlene",
      "birthday": "1994-12-05",
      "email": "sharlenehuff@gology.com",
      "gender": "female",
      "privateInfo": {
        "idnp": 2985131902797
      },
      "address": {
        "country": "Moldova",
        "city": "Rutherford",
        "street": "Driggs Avenue",
        "block": 81,
        "apartmen": 64
      },
      "homePhone": "+231 (942) 487-2457",
      "workContract": {
        "position": "developer",
        "workContractStartFrom": "2005-05-06",
        "workConditions": {
          "salary": 704215,
          "totalWorkExperience": 12,
          "department": "ACLIMA department",
          "workSchedule": {
            "start": "2014-03-16T08:17:14 -03:00",
            "end": "2017-12-07T07:52:28 -03:00",
            "lunch": {
              "start": "12:00",
              "end": "13:00"
            }
          }
        }
      }
    },
    {
      "name": "Mccray",
      "sureName": "Townsend",
      "patronymic": "Juliette",
      "birthday": "1994-05-24",
      "email": "juliettetownsend@aclima.com",
      "gender": "female",
      "privateInfo": {
        "idnp": 1234745940097
      },
      "address": {
        "country": "Moldova",
        "city": "Salvo",
        "street": "Aster Court",
        "block": 55,
        "apartmen": 41
      },
      "homePhone": "+231 (993) 493-2448",
      "workContract": {
        "position": "developer",
        "workContractStartFrom": "2014-03-17",
        "workConditions": {
          "salary": 788668,
          "totalWorkExperience": 12,
          "department": "ZILLAN department",
          "workSchedule": {
            "start": "2017-06-02T04:15:05 -03:00",
            "end": "2019-07-01T06:18:00 -03:00",
            "lunch": {
              "start": "12:00",
              "end": "13:00"
            }
          }
        }
      }
    },
    {
      "name": "Hatfield",
      "sureName": "Little",
      "patronymic": "Lacey",
      "birthday": "1994-06-18",
      "email": "laceylittle@zillan.com",
      "gender": "female",
      "privateInfo": {
        "idnp": 4838958513097
      },
      "address": {
        "country": "Moldova",
        "city": "Volta",
        "street": "Dorset Street",
        "block": 50,
        "apartmen": 78
      },
      "homePhone": "+231 (899) 530-3415",
      "workContract": {
        "position": "developer",
        "workContractStartFrom": "2013-08-28",
        "workConditions": {
          "salary": 493140,
          "totalWorkExperience": 12,
          "department": "INSURITY department",
          "workSchedule": {
            "start": "2020-03-17T04:13:06 -03:00",
            "end": "2017-12-14T10:53:45 -03:00",
            "lunch": {
              "start": "12:00",
              "end": "13:00"
            }
          }
        }
      }
    },
    {
      "name": "Clarice",
      "sureName": "Matthews",
      "patronymic": "Rojas",
      "birthday": "1994-12-02",
      "email": "rojasmatthews@insurity.com",
      "gender": "male",
      "privateInfo": {
        "idnp": 1500620576985
      },
      "address": {
        "country": "Moldova",
        "city": "Marshall",
        "street": "Newkirk Placez",
        "block": 94,
        "apartmen": 16
      },
      "homePhone": "+231 (918) 543-3623",
      "workContract": {
        "position": "developer",
        "workContractStartFrom": "2007-05-23",
        "workConditions": {
          "salary": 129578,
          "totalWorkExperience": 12,
          "department": "MAGNINA department",
          "workSchedule": {
            "start": "2020-01-02T02:40:43 -03:00",
            "end": "2020-02-23T08:10:13 -03:00",
            "lunch": {
              "start": "12:00",
              "end": "13:00"
            }
          }
        }
      }
    },
    {
      "name": "Sonja",
      "sureName": "Hull",
      "patronymic": "Roth",
      "birthday": "1994-05-26",
      "email": "rothhull@magnina.com",
      "gender": "male",
      "privateInfo": {
        "idnp": 4711147848436
      },
      "address": {
        "country": "Moldova",
        "city": "Montura",
        "street": "Seeley Street",
        "block": 81,
        "apartmen": 44
      },
      "homePhone": "+231 (992) 560-2676",
      "workContract": {
        "position": "developer",
        "workContractStartFrom": "2005-02-07",
        "workConditions": {
          "salary": 594202,
          "totalWorkExperience": 12,
          "department": "SCENTRIC department",
          "workSchedule": {
            "start": "2016-05-29T09:26:52 -03:00",
            "end": "2015-10-08T01:57:50 -03:00",
            "lunch": {
              "start": "12:00",
              "end": "13:00"
            }
          }
        }
      }
    },
    {
      "name": "Kemp",
      "sureName": "King",
      "patronymic": "Johnston",
      "birthday": "1994-01-16",
      "email": "johnstonking@scentric.com",
      "gender": "male",
      "privateInfo": {
        "idnp": 6962269851237
      },
      "address": {
        "country": "Moldova",
        "city": "Sims",
        "street": "Baycliff Terrace",
        "block": 24,
        "apartmen": 36
      },
      "homePhone": "+231 (801) 525-2582",
      "workContract": {
        "position": "developer",
        "workContractStartFrom": "2004-11-22",
        "workConditions": {
          "salary": 717044,
          "totalWorkExperience": 12,
          "department": "OBONES department",
          "workSchedule": {
            "start": "2019-08-04T09:17:56 -03:00",
            "end": "2022-01-26T04:21:59 -03:00",
            "lunch": {
              "start": "12:00",
              "end": "13:00"
            }
          }
        }
      }
    },
    {
      "name": "Hillary",
      "sureName": "Snider",
      "patronymic": "Anastasia",
      "birthday": "1994-02-24",
      "email": "anastasiasnider@obones.com",
      "gender": "female",
      "privateInfo": {
        "idnp": 2476413993630
      },
      "address": {
        "country": "Moldova",
        "city": "Graniteville",
        "street": "Lott Place",
        "block": 43,
        "apartmen": 45
      },
      "homePhone": "+231 (896) 561-3763",
      "workContract": {
        "position": "developer",
        "workContractStartFrom": "2011-03-05",
        "workConditions": {
          "salary": 644309,
          "totalWorkExperience": 12,
          "department": "REPETWIRE department",
          "workSchedule": {
            "start": "2022-02-02T01:04:58 -03:00",
            "end": "2018-12-22T12:29:52 -03:00",
            "lunch": {
              "start": "12:00",
              "end": "13:00"
            }
          }
        }
      }
    },
    {
      "name": "Atkins",
      "sureName": "Haley",
      "patronymic": "Winnie",
      "birthday": "1994-07-30",
      "email": "winniehaley@repetwire.com",
      "gender": "female",
      "privateInfo": {
        "idnp": 4251112090627
      },
      "address": {
        "country": "Moldova",
        "city": "Munjor",
        "street": "Ralph Avenue",
        "block": 20,
        "apartmen": 2
      },
      "homePhone": "+231 (823) 550-2141",
      "workContract": {
        "position": "developer",
        "workContractStartFrom": "2005-03-26",
        "workConditions": {
          "salary": 558134,
          "totalWorkExperience": 12,
          "department": "GYNK department",
          "workSchedule": {
            "start": "2014-04-11T05:49:42 -03:00",
            "end": "2015-04-18T02:42:48 -03:00",
            "lunch": {
              "start": "12:00",
              "end": "13:00"
            }
          }
        }
      }
    }
  ];

function createPersonListElement(person) {
  let element = document.createElement("li");
  element.innerHTML = `<p>
    <span>${person.name} ${person.sureName} ${person.patronymic} <i>${person.gender}</i> ${person.birthday}</span> <strong>IDNP: ${person.privateInfo.idnp}</strong><br/>
        Contact Info:
            Address: <span>${person.address.country} ${person.address.city} ${person.address.street} ${person.address.block}/${person.address.apartmen}</span></br>
            Email: ${person.email}<br/>
            Home Phone: ${person.homePhone}
    </p>`;

  personsList.appendChild(element);
}

function createSalaryListElement(person) {
  let element = document.createElement("li");
  element.innerHTML = `<p>
    <span>${person.name} ${person.sureName}: ${person.workContract.workConditions.salary}</span>
    </p>`;
  salariesList.append(element);
}

function processJson() {
  let sumSalary = 0;
  let minSalary = 0;
  let maxSalary = 0;

  for (let i = 0; i < persons.length; i++) {
    createPersonListElement(persons[i]);
    createSalaryListElement(persons[i]);

    sumSalary += persons[i].workContract.workConditions.salary;
    minSalary =
      minSalary > persons[i].workContract.workConditions.salary
        ? persons[i].workContract.workConditions.salary
        : minSalary;
    maxSalary =
      maxSalary < persons[i].workContract.workConditions.salary
        ? persons[i].workContract.workConditions.salary
        : maxSalary;
  }

  statistics.innerHTML = `Average Salary = ${sumSalary / persons.length}, Min Salary = ${minSalary}, Max Salary = ${maxSalary}`;
}

document.onload = processJson();
