import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
/*
  usersList: User[] = [
    { id: 1, name: "Luis1", email: "luis1@gmail.com", password: "", role: "comprador" },
    { id: 2, name: "Luis1", email: "luis1@gmail.com", password: "", role: "vendedor" },
    { id: 3, name: "Luis1", email: "luis1@gmail.com", password: "", role: "vendedor" },
    { id: 4, name: "Luis1", email: "luis1@gmail.com", password: "", role: "comprador" },
    { id: 5, name: "Luis1", email: "luis1@gmail.com", password: "", role: "comprador" },
  ];
*/
  usersList: User[] = [];
  loading: boolean = false;

  constructor(
    private _userService: UserService,
    private toastr: ToastrService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {

    this.loading = true;
    this._userService.getAllUsers().subscribe((data: User[]) => {
      this.usersList = data;
      this.loading = false;
    });

  }

  deleteUser(userId: number): void {
    this.loading = true;
    this._userService.deleteUser(userId).subscribe(() => {
      this.getAllUsers();
      this.toastr.warning(`Usuario (${userId}) eliminado con exito!`, 'Usuario eliminado');
      this.loading = false;
    });
  }

  updateUserRole(userId: number, newRole: string): void {
    this.loading = true;
    this._userService.updateUser(userId, newRole).subscribe(() => {
      this.getAllUsers();
      this.toastr.warning(`Usuario (${userId}) actualizado con exito!`, 'Usuario actualizado');
      this.loading = false;
    });    
  }

  openDeleteUserDialog(user: User): void {
    let dialogRef = this.dialog.open(DialogComponent, { 
      width: "40%", height: "30%",
      data: {
        userId: user.id, userName: user.name, userEmail: user.email
      }
    }); 
    dialogRef.afterClosed().subscribe((result: number) => {
      if(typeof result === "number") {
        this.deleteUser(result);
      }
    });
  }
}
