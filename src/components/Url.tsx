import { useFormik } from "formik";

type Props = {
  setUrl: (url: string) => void;
};

function Url({ setUrl }: Props) {
  const formik = useFormik({
    initialValues: {
      url: "",
    },
    onSubmit: (values) => {
      setUrl(values.url);
    },
  });

  return (
    <div className="ml-10">
      <form onSubmit={formik.handleSubmit}>
        <label className="mr-3 font-medium">Ссылка на расписание: </label>
        <input
          id="url"
          name="url"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.url}
        />
        <button
          type="submit"
          className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Применить
        </button>
      </form>
    </div>
  );
}

export default Url;
