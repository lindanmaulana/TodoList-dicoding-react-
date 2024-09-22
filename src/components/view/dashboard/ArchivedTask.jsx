import { BiTaskX } from "react-icons/bi";
import {
  MdArchive,
  MdOutlineDeleteForever
} from "react-icons/md";
import { showFormattedDate } from "../../../utils/Index";
import Title from "../../elements/Title";

const ArchivedTask = (props) => {
  const { handleDelete, handleMoveIt, selector } = props;

  const dataRender =
    selector.search.length > 0 ? selector.search : selector.task;
  return (
    <div>
      <Title>Archived Task</Title>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {dataRender.length > 0 ? (
          dataRender
            .filter((fill) => fill.archived === true)
            .map((values, index) => {
              const formatedDate = showFormattedDate(values.createdAt);
              console.log({ formatedDate });
              return (
                <div
                  className="flex justify-between gap-2 p-2 rounded-md shadow-xl bg-primary shadow-primary/30"
                  key={index}
                >
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-third">
                        {values.title}
                      </h3>
                      <p className="text-xs font-bold text-third/50 mb-[14px]">
                        {formatedDate}
                      </p>
                      <p className="text-xs font-bold text-third mb-[14px]">
                        {values.body}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      {" "}
                      <button
                        onClick={() => handleMoveIt(values.id)}
                        className="flex items-center gap-2 text-xs text-yellow-500"
                      >
                        <MdArchive className="text-xl" />
                        Move it
                      </button>
                      <button
                        onClick={() => handleDelete(values.id)}
                        className="flex items-center text-xs text-red-600"
                      >
                        <MdOutlineDeleteForever className="text-xl" />
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
        ) : (
          <p className="flex items-center justify-center gap-4 text-base text-center text-primary/50">
            Empty assignment <BiTaskX />
          </p>
        )}
      </div>
    </div>
  );
};

export default ArchivedTask;
