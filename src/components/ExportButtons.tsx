type Props = {
  url: string;
};

function ExportButtons({ url: scheduleUrl }: Props) {
  return (
    <div>
      <a download href={`http://localhost:3001/calendar?url=${scheduleUrl}`}>
        <button className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Экспорт в .ics
        </button>
      </a>
    </div>
  );
}

export default ExportButtons;
