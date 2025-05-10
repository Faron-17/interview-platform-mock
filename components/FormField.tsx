import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import { Input } from "@/components/ui/input"

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file'
}

const FormField = <T extends FieldValues>({ name, control, label, placeholder, type="text" }: FormFieldProps<T>) => (
    <Controller name={name} control={control} render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input className="input" type={type} placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
    />
)

export default FormField