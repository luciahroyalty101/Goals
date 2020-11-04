
// export class goal {
//     showDescription: boolean;
//     constructor(public id: number,public name: string,public description: string){
//       this.showDescription=false;
//     }
//   }
  export class goal {
    public showDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public completeDate: Date){
      this.showDescription=false;
    }
  }
  