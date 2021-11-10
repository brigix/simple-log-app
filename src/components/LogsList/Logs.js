import Log from "./Log";

const Logs = ({ logs }) => {
  return (
    <>
      {logs.map((log) => (
        <Log
          key={log.id}
          Id={log.id}
          UserId={log.userId}
          Title={log.title}
          Body={log.body}
        />
      ))}
    </>
  );
};
export default Logs;
