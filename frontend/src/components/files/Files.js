import { useSelector } from "react-redux";
import FilesDataList from "./FilesDataList";
import FileDataDetail from "./FileDataDetail";

function Files() {
  const { selectedFile } = useSelector((state) => state);

  return (
    <div>
      {selectedFile ? (
        <FileDataDetail file={selectedFile} />
      ) : (
        <FilesDataList />
      )}
    </div>
  );
}

export default Files;
