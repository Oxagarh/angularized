import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DrinksService } from 'src/app/core/data-services/drinks/drinks.service';
import { Drink } from 'src/app/shared/models/drink.model';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'h-drink-modal',
  templateUrl: './drink-modal.component.html',
  styleUrls: ['./drink-modal.component.scss']
})

export class DrinkModalComponent implements OnInit {
  @Input() public drink: Drink;

  @Output() public readonly successfulTransaction = new EventEmitter<boolean>();
  public form: FormGroup;
  public submitAttempt: boolean;
  
  constructor(
    private formBuilder: FormBuilder,
    private modal: NgbModal,
    private readonly service: DrinksService,
    private readonly translate: TranslateService
  ) {  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      type: ["whisky", [Validators.required]],
      is_alcoholic: [false, [Validators.required]],
      is_prepared: [false, [Validators.required]],
      acceptance: [3.5]
    });
    if(this.isEditMode()){
      this.form.patchValue(this.drink);
    }

  }

  public closeModal(): void {
    this.modal.dismissAll();
  }

  public createEditDrink(): void {
    this.submitAttempt = true;
    if(!this.form.valid){
      console.log("invalid fields");
      return;
    }

    const action = this.isEditMode() ? 
      this.service.editDrink(this.drink.id, this.form.value) :
      this.service.createDrink(this.form.value);
    
    action.subscribe(() => {
      this.successfulTransaction.emit(true);
      this.closeModal();
    });
  }

  public isFieldValid(field: string): boolean {
    return this.form.controls[field].valid || !this.submitAttempt;
  }

  public isEditMode(): boolean {
    return !!this.drink?.id;
  }

  public get beHeader(): string {
    return this.isEditMode() ? this.translate.instant('Edit Drink') : this.translate.instant('Create Drink');
  }

  public get doAction(): string {
    return this.isEditMode() ? this.translate.instant('actions.update') : this.translate.instant('actions.create');
  }

}
