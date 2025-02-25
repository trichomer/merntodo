const asyncHandler = require("express-async-handler");

const Group = require("../models/groupModel");

const getGroupsByUser = asyncHandler(async (req, res) => {});

const inviteUserToGroup = asyncHandler(async (req, res) => {});

const userLeaveGroup = asyncHandler(async (req, res) => {});

const editGroup = asyncHandler(async (req, res) => {});

const deleteGroup = asyncHandler(async (req, res) => {});

module.exports = {
  getGroupsByUser,
  inviteUserToGroup,
  userLeaveGroup,
  editGroup,
  deleteGroup,
};
