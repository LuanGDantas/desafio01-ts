import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number, status: boolean = true){
    super(name, accountNumber, status);
    this.doc_id = doc_id;
  }
}