import { Request, Response, NextFunction } from 'express';
import { client } from '../config/elasticsearch';
import { InternalErrorResponse } from '../helpers/response.helper';
import { DATABASES } from '../constants';

const userData = {
  // _id: '64f47bb909d5f65c55f653f7',
  username: 'frankez',
  firstName: 'Ugochukwu',
  midName: 'Frank',
  lastName: 'Eze',
  date_of_birth: '15th October 1992',
  age: '31',
  residential_address: 'Aston Villa',
  postal_address: 'Villa Toscana',
  local_government_area: 'enugu east',
  occupation: 'Developer',
  phoneNumber: '07061763713',
  email: 'ugo@gmail.com',
  password: '$2a$10$oyu4y7v8Ntceo3r.dD3k2OKWbi1a0fUaOEx3IEYdLZTqprjqIZ4sW',
  nationality: 'Nigerian',
  picture: 'https://api.dicebear.com/6.x/initials/svg?seed=Ugo',
  verified: true,
  __v: 0,
};

async function elasticSearchDuplicate(req: Request, res: Response, next: NextFunction) {
  const elasticData = await client.index({
    index: DATABASES.USER, // Replace with your desired index name
    body: userData,
  });

  console.log(elasticData);
  return next();
}

export default elasticSearchDuplicate;
