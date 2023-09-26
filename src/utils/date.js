import { differenceInDays, parse } from 'date-fns';

const isNewProject = (createdAt) => {
  const currentDate = new Date();
  const createDate = parse(createdAt, 'dd-MM-yyyy', new Date());
  const difference = differenceInDays(currentDate, createDate);
  return difference <= 7;
};

export { isNewProject };
