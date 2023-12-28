import { UserModel } from '../models';
import { IUser } from '../interfaces';

class Service {
  async create(body: object) {
    return await UserModel.create(body);
  }

  async getAll(pagination: number) {
    return await UserModel.find({ deleted: false })
      .limit(10)
      .skip(pagination)
      .sort({ createdAt: 'desc' })
      .select('-__v');
  }

  async update(searchDetails: object, update: object) {
    return await UserModel.findOneAndUpdate({ ...searchDetails, deleted: false }, update, {
      new: true,
    }).select('-__v');
  }

  async find(searchData: object) {
    return await UserModel.find({ ...searchData, deleted: false }).select('-__v');
  }

  async findOne(searchData: object) {
    return UserModel.findOne({ ...searchData, deleted: false }).select('-__v');
  }

  async findOneReturnPassword(searchData: object) {
    return UserModel.findOne({ ...searchData, deleted: false }).select('-__v +password');
  }

  async softDelete(searchParams: object) {
    return await UserModel.findOneAndUpdate(
      { ...searchParams, deleted: false },
      { deleted: true },
      {
        new: true,
      },
    ).select('-__v');
  }

  async hardDelete(searchParams: object) {
    return await UserModel.findOneAndDelete(searchParams).select('-__v');
  }

  async exists(searchParams: object) {
    return await UserModel.exists(searchParams);
  }
}

export const userService = new Service();
