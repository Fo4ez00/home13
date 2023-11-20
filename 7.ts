class Ticket {
    constructor(public type: string, public cost: number) {}
  } 

  class Cashier {
    private ticketPrices: { adult: number; child: number; family: number };
  
    constructor() {
      this.ticketPrices = { adult: 20, child: 10, family: 50 };
    }
  
    sellTicket(visitorType: string, visitorData: Visitor): Ticket {
      let ticket: Ticket;
  
      switch (visitorType) {
        case 'adult':
          ticket = new Ticket('adult', this.ticketPrices.adult);
          break;
        case 'child':
          ticket = new Ticket('child', this.ticketPrices.child);
          break;
        case 'family':
          ticket = new Ticket('family', this.ticketPrices.family);
          break;
        default:
          throw new Error('Невідомий тип квитка');
      }
  
      VisitorsList.addVisitor(visitorData);
  
      return ticket;
    }
  }
  
  class Visitor {
    constructor(public name: string) {}
  }
  
  class VisitorsList {
    private static visitors: Visitor[] = [];
  
    static addVisitor(visitor: Visitor): void {
      this.visitors.push(visitor);
    }
  
    static notifyVisitors(): void {
      const notificationTimeBeforeClosing = 15 * 60 * 1000;
      const notificationTimeBeforeLeaving = 5 * 60 * 1000;
  
      this.visitors.forEach((visitor) => {
        setTimeout(() => {
          console.log(`Оповіщення для ${visitor.name}: Закриття через 15 хвилин`);
        }, notificationTimeBeforeClosing);
  
        setTimeout(() => {
          console.log(`Оповіщення для ${visitor.name}: Перед відходом через 5 хвилин`);
        }, notificationTimeBeforeLeaving);
      });
    }
  }
  
  class Client {
    constructor(public name: string) {}
  }
  
  class Clients {
    public static clientList: Client[] = [];
  
    static addClient(client: Client): void {
      this.clientList.push(client);
    }
  }
  
  class Animal {
    constructor(
        public name: string,
        public species: string,
        public age: number,
        public health: string
      ) {}
  }
  
  class Animals {
    private static animalList: Animal[] = [];
  
    static addAnimal(animal: Animal): void {
      this.animalList.push(animal);
    }
  }
  
  class Employee {
    constructor(public name: string) {}
  }
  
  class Employees {
    private static employeeList: Employee[] = [];
  
    static addEmployee(employee: Employee): void {
      this.employeeList.push(employee);
    }
  }
  
  class AdvertisingDepartment {
    static sendAdvertisement(message: string): void {
      Clients.clientList.forEach((client) => {
        console.log(`Розсилка рекламного повідомлення: ${message} до клієнта ${client.name}`);
      });
    }
  }
  
  class Revenue {
    private static dailyRevenue: number = 0;
  
    static collectRevenue(amount: number): void {
      this.dailyRevenue += amount;
      AccountingDepartment.updateFinancialData(this.dailyRevenue);
    }
  }
  
  class AccountingDepartment {
    private static financialData: number = 0;
    private static income: number = 0;
    private static expenses: number = 0;
  
    static updateFinancialData(amount: number): void {
      this.financialData = amount;
      this.calculateIncomeAndExpenses(); 
    }
  
    static generateFinancialReports(): void {
      const profit = this.income - this.expenses;
  
      console.log('=== Фінансовий Звіт ===');
      console.log(`Загальний дохід: ${this.income} грн`);
      console.log(`Загальні витрати: ${this.expenses} грн`);
      console.log(`Прибуток: ${profit} грн`);
      console.log('=======================');
    }
  
    private static calculateIncomeAndExpenses(): void {
      
      this.income = this.financialData;
      this.expenses = Math.random() * 1000;
    }
  }
  
  class Administration {
    private static notifications: string[] = [];
  
    static createNotifications(message: string): void {
      this.notifications.push(message);
      console.log(`Створено сповіщення: ${message}`);
    }
  
    static showNotifications(): void {
      console.log('=== Сповіщення ===');
      this.notifications.forEach((notification, index) => {
        console.log(`${index + 1}. ${notification}`);
      });
      console.log('===================');
    }
  
    static manageEmployeesAndAnimals(action: string, data: Employee | Animal): void {
      switch (action) {
        case 'add':
          if (data instanceof Employee) {
            Employees.addEmployee(data);
            console.log(`Додано нового співробітника: ${data.name}`);
          } else if (data instanceof Animal) {
            Animals.addAnimal(data);
            console.log(`Додано нову тварину: ${data.name}`);
          }
          break;
        case 'remove':
          if (data instanceof Employee) {
            
            console.log(`Видалено співробітника: ${data.name}`);
          } else if (data instanceof Animal) {
            
            console.log(`Видалено тварину: ${data.name}`);
          }
          break;
        default:
          console.log('Невідома дія');
      }
    }
  }