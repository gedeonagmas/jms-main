import asyncCatch from "express-async-catch";
import AppError from "../utils/AppError.js";
import { selectModel } from "../utils/selectModel.js";

//create
export const _create = asyncCatch(async (req, res, next) => {
  const model = selectModel(req.query.tt_nn, next);

  const data = await model.create(req.body);

  if (!data)
    return next(new AppError("something went wrong unable to create the data"));

  res
    .status(201)
    .json({ status: "Success", message: "data created successfully", data });
});

//read
export const _read = asyncCatch(async (req, res, next) => {
  const model = selectModel(req.query.tt_nn, next);

  if (model) {
    const total = await model.find();
    const params = { ...req.query };

    const remove = [
      "sort",
      "page",
      "limit",
      "fields",
      "value",
      "ss_ff",
      "ss_vv",
      "tt_nn",
      "uu_tt",
      "pp_ff",
    ];
    remove.forEach((el) => delete params[el]);

    //filtering
    let queryObject = JSON.parse(
      JSON.stringify(params).replace(
        /\b(gte|lte|lt|gt|eq|neq)\b/g,
        (match) => `$${match}`
      )
    );

    //searching
    if (req.query.ss_ff)
      queryObject[req.query.ss_ff] = new RegExp(req.query.ss_vv, "gi");
    // queryObject[req.query.ss_ff] = new RegExp('(>[^<.]*)(' + req.query.ss_vv + ')([^<.]*)','gi');

    //sorting
    const query = model.find({ ...queryObject });
    req.query.sort
      ? query.sort(req.query.sort.split(",").join(" "))
      : query.sort("-createdAt");

    //limiting fields
    const fields = req.query.fields
      ? req.query.fields.split(",").join(" ")
      : "-_v";
    query.select(fields);

    //pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || null;
    const skip = (page - 1) * limit;
    query.skip(skip).limit(limit);

    //populating
    switch (req.query.uu_tt) {
      case "private":
        query.populate(req.query.pp_ff);
        break;
      default:
        query;
    }

    const data = await query;

    //last page indicator
    if (page) {
      const dd = await model.countDocuments();
      if (skip >= dd)
        return next(new AppError("you are in the last page", 404));
    }
    if (data.length < 1)
      return next(new AppError("There is no data to display", 400));

    return res.status(200).json({
      status: "success",
      length: data.length,
      total: total.length,
      data: data,
    });
  }
});

//update
export const _update = asyncCatch(async (req, res, next) => {
  const model = selectModel(req.query.tt_nn, next);

  const data = await model.findOneAndUpdate(
    { _id: req.query.id },
    { ...req.body }
  );

  if (!data)
    return next(new AppError("something went wrong unable to update the data"));

  res
    .status(201)
    .json({ status: "Success", message: "data updated successfully" });
});

//delete
export const _delete = asyncCatch(async (req, res, next) => {
  const model = selectModel(req.query.tt_nn, next);

  const data = await model.findByIdAndUpdate(
    { _id: req.query.id },
    { ...req.body }
  );

  if (!data)
    return next(new AppError("something went wrong unable to delete the data"));

  res
    .status(201)
    .json({ status: "Success", message: "data deleted successfully" });
});

//read single data
export const _readSingle = asyncCatch(async (req, res, next) => {
  const model = selectModel(req.query.tt_nn, next);
  const data = await model.findById(req.query.id);

  if (!data)
    return next(new AppError("something went wrong unable to fetch the data"));

  res
    .status(201)
    .json({ status: "Success", message: "data fetched successfully", data });
});