import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.css']
})
export class ReativeFormComponent implements OnInit {
  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    // this.formModel = new FormGroup({
    //   dateRange: new FormGroup({
    //     from: new FormControl(),
    //     to: new FormControl()
    //   }),
    //   emails: new FormArray([
    //     new FormControl("123@qq.com"),
    //     new FormControl("456@qq.com"),
    //     new FormControl("789@qq.com")
    //   ])
    // });

    //use form builder
    this.formModel = fb.group({
      dateRange: fb.group({
        from: [''],
        to: ['']
      }),
      emails: fb.array([
        ["123@qq.com"],
        ["456@qq.com"],
        ["789@qq.com"]
      ])
    });
  }

  ngOnInit() {
  }

  save() {
    console.log(this.formModel.value);
  }

  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }
}
