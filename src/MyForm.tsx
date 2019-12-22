import React, {FunctionComponent, useState} from "react";

export interface Form {
  name: string;
  description: string;
}

interface OwnProps {
  onSubmit: (form: Form) => void;
}

type Props = OwnProps;

const MyForm: FunctionComponent<Props> = props => {
  const [form, setForm] = useState<Form>({
    name: "",
    description: ""
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(form);
    setForm({
      name: "",
      description: ""
    });
  };

  return (
      <form onSubmit={handleSubmit}>
        <input name={"name"} value={form.name} onChange={onChange}/>
        <input name={"description"} value={form.description} onChange={onChange}/>
        <button type={"submit"}>등록</button>
      </form>
  );
};

export default MyForm;
