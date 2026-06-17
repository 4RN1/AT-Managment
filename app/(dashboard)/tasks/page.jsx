import { get, getWhere } from '@/action/ClientActions';
import Tasks from '@/components/tasks-page/Tasks';

const page = async () => {
  const columns = `*, assigned:assigned_to(name), author:created_by(name)`;
  const profiles = await get("profiles", "id, name");
  const getAll = await get("tasks", "id");

  const todo       = await getWhere("tasks", "status", "todo",        columns);
  const inProgress = await getWhere("tasks", "status", "in_progress", columns);
  const done       = await getWhere("tasks", "status", "done",        columns);
  const overdue    = await getWhere("tasks", "status", "cancelled",   columns);

  return (
    <Tasks
      profiles={profiles}
      allCount={getAll.length}
      todo={todo}
      inProgress={inProgress}
      done={done}
      overdue={overdue}
    />
  );
};

export default page;