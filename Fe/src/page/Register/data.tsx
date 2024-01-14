interface FormField {
  id: number;
  name: string;
  isClass: boolean;
}

export const createFormData = (): FormField[] => [
  {
    id: 1,
    name: "username",
    isClass: true,
  },
  {
    id: 2,
    name: "password",
    isClass: false,
  },
  {
    id: 3,
    name: "confirmPassword",
    isClass: false,
  },
  {
    id: 4,
    name: "email",
    isClass: true,
  },
  {
    id: 5,
    name: "fullname",
    isClass: true,
  },
];
