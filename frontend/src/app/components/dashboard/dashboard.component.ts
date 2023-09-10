import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usersList: User[] = [
    { name: "Luis1", email: "luis1@gmail.com", password: "" },
    { name: "Luis2", email: "luis2@gmail.com", password: "" },
    { name: "Luis3", email: "luis3@gmail.com", password: "" },
    { name: "Luis4", email: "luis4@gmail.com", password: "" },
    { name: "Luis5", email: "luis5@gmail.com", password: "" },
    { name: "Luis6", email: "luis6@gmail.com", password: "" },
    { name: "Luis7", email: "luis7@gmail.com", password: "" },
  ];
  loading: boolean = false;

  constructor(private _userService: UserService, private toastr: ToastrService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    /*
    this.loading = true;
    this._adminService.getAllUsers().subscribe((data: User[]) => {
      this.usersList = data;
      this.loading = false;
    });
    */
  }

  getUser(email: string): void {

  }

  deleteUser(email: string): void {
    this.loading = true;
    this._adminService.deleteUser(email).subscribe(() => {
      this.getAllUsers();
      this.toastr.warning(`Usuario (${email}) eliminado con exito!`, 'Usuario eliminado');
      this.loading = false;
    });
  }

  /*
  setUserSellerState(email: string, isSeller: boolean): void {
    this.getUser(email)
  }
  */

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

  /*
  getProducts() {
      this.loading = true;
      this._productService.getProducts().subscribe((data: Product[]) => {
      this.listProduct = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number) {
      this.loading = true;
      this._productService.deleteProduct(id).subscribe(() => {
      this.getProducts();
      this.toastr.warning('Producto eliminado con exito!', 'Producto eliminado');
    })
  }
  */
}
