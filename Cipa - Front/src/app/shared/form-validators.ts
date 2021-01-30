import { AbstractControl, FormGroup } from '@angular/forms';
export class FormValidators {

  public static equals(valor: string) {
    const validator = (formControl: AbstractControl) => {
      if (!valor) {
        return null;
      }

      if (!formControl.root || !(formControl.root as FormGroup).controls) {
        return null;
      }


      if (formControl.value !== valor) {
        return { equals: valor };
      }
      return null;
    };
    return validator;
  }

  public static equalsTo(otherField: string) {
    const validator = (formControl: AbstractControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo!');
      }

      if (!formControl.root || !(formControl.root as FormGroup).controls) {
        return null;
      }

      const field = (formControl.root as FormGroup).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido!');
      }

      if (formControl.value !== field.value) {
        return { equalsTo: true };
      }
      return null;
    };
    return validator;
  }

  public static date(formControl: AbstractControl) {
    if (!formControl.root || !(formControl.root as FormGroup).controls) {
      return null;
    }

    if (formControl.value && !(formControl.value instanceof Date)) {
      return { date: true };
    }
    return null;
  }

  public static referenteA(otherField: string) {
    const validator = (formControl: AbstractControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo!');
      }

      if (!formControl.root || !(formControl.root as FormGroup).controls) {
        return null;
      }

      const field = (formControl.root as FormGroup).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido!');
      }

      let controlName = null;

      Object.keys(formControl.parent.controls).forEach((name) => {
        // and compare the passed control and
        // a child control of a parent - with provided name (we iterate them all)
        if (formControl === formControl.parent.controls[name]) {
          // both are same: control passed to Validator
          //  and this child - are the same references
          controlName = name.toLowerCase();
        }
      });

      if (!formControl.value && field.value.toLowerCase() === controlName) {
        return { referenteA: true };
      }
      return null;
    };
    return validator;
  }
}
