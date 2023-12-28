import { ResetTokenModel } from '../models';

class Service {
  async create(body: object) {
    return await ResetTokenModel.create(body);
  }

  async getAll(pagination: number) {
    return await ResetTokenModel.find({ deleted: false })
      .limit(10)
      .skip(pagination)
      .sort({ createdAt: 'desc' })
      .select('-__v');
  }

  async update(searchDetails: object, update: object) {
    return await ResetTokenModel.findOneAndUpdate({ ...searchDetails, deleted: false }, update, {
      new: true,
    }).select('-__v');
  }

  async find(searchData: object) {
    return await ResetTokenModel.find({ ...searchData, deleted: false }).select('-__v');
  }

  async findOne(searchData: object) {
    return ResetTokenModel.findOne({ ...searchData, deleted: false }).select('-__v');
  }

  async softDelete(searchParams: object) {
    return await ResetTokenModel.findOneAndUpdate(
      { ...searchParams, deleted: false },
      { deleted: true },
      {
        new: true,
      },
    ).select('-__v');
  }

  async hardDelete(searchParams: object) {
    return await ResetTokenModel.findOneAndDelete(searchParams).select('-__v');
  }

  async exists(searchParams: object) {
    return await ResetTokenModel.exists(searchParams);
  }
}

export const resetTokenService = new Service();
