1.Task3: Optional task

How to run angular project on a customized portno
ng serve --port 3456 

2.Task for today: 

 ngIf: conditionally show/hide element
               Example:checkbox Is permanent address same as present address???
               present address to be copied to permanent address
<div>
    <label for="checked">Present Address & Permanent Address Same</label>
    <input type="checkbox" id="checked" name="checkbox" [(ngModel)]="isChecked"> <br>
Present Address: <input type="text" [(ngModel)]="address"><br>
Permanent Address:<input type="text" *ngIf="isChecked" [value]="address"><br><br>
</div>               
