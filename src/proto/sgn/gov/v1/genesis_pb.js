// source: sgn/gov/v1/genesis.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var sgn_gov_v1_gov_pb = require('../../../sgn/gov/v1/gov_pb.js');
goog.object.extend(proto, sgn_gov_v1_gov_pb);
goog.exportSymbol('proto.sgn.gov.v1.GenesisState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gov.v1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gov.v1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.sgn.gov.v1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gov.v1.GenesisState.displayName = 'proto.sgn.gov.v1.GenesisState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gov.v1.GenesisState.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gov.v1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gov.v1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gov.v1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gov.v1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    startingProposalId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    depositsList: jspb.Message.toObjectList(msg.getDepositsList(),
    sgn_gov_v1_gov_pb.Deposit.toObject, includeInstance),
    votesList: jspb.Message.toObjectList(msg.getVotesList(),
    sgn_gov_v1_gov_pb.Vote.toObject, includeInstance),
    proposalsList: jspb.Message.toObjectList(msg.getProposalsList(),
    sgn_gov_v1_gov_pb.Proposal.toObject, includeInstance),
    depositParams: (f = msg.getDepositParams()) && sgn_gov_v1_gov_pb.DepositParams.toObject(includeInstance, f),
    votingParams: (f = msg.getVotingParams()) && sgn_gov_v1_gov_pb.VotingParams.toObject(includeInstance, f),
    tallyParams: (f = msg.getTallyParams()) && sgn_gov_v1_gov_pb.TallyParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gov.v1.GenesisState}
 */
proto.sgn.gov.v1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gov.v1.GenesisState;
  return proto.sgn.gov.v1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gov.v1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gov.v1.GenesisState}
 */
proto.sgn.gov.v1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartingProposalId(value);
      break;
    case 2:
      var value = new sgn_gov_v1_gov_pb.Deposit;
      reader.readMessage(value,sgn_gov_v1_gov_pb.Deposit.deserializeBinaryFromReader);
      msg.addDeposits(value);
      break;
    case 3:
      var value = new sgn_gov_v1_gov_pb.Vote;
      reader.readMessage(value,sgn_gov_v1_gov_pb.Vote.deserializeBinaryFromReader);
      msg.addVotes(value);
      break;
    case 4:
      var value = new sgn_gov_v1_gov_pb.Proposal;
      reader.readMessage(value,sgn_gov_v1_gov_pb.Proposal.deserializeBinaryFromReader);
      msg.addProposals(value);
      break;
    case 5:
      var value = new sgn_gov_v1_gov_pb.DepositParams;
      reader.readMessage(value,sgn_gov_v1_gov_pb.DepositParams.deserializeBinaryFromReader);
      msg.setDepositParams(value);
      break;
    case 6:
      var value = new sgn_gov_v1_gov_pb.VotingParams;
      reader.readMessage(value,sgn_gov_v1_gov_pb.VotingParams.deserializeBinaryFromReader);
      msg.setVotingParams(value);
      break;
    case 7:
      var value = new sgn_gov_v1_gov_pb.TallyParams;
      reader.readMessage(value,sgn_gov_v1_gov_pb.TallyParams.deserializeBinaryFromReader);
      msg.setTallyParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gov.v1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gov.v1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gov.v1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gov.v1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartingProposalId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getDepositsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      sgn_gov_v1_gov_pb.Deposit.serializeBinaryToWriter
    );
  }
  f = message.getVotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      sgn_gov_v1_gov_pb.Vote.serializeBinaryToWriter
    );
  }
  f = message.getProposalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      sgn_gov_v1_gov_pb.Proposal.serializeBinaryToWriter
    );
  }
  f = message.getDepositParams();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      sgn_gov_v1_gov_pb.DepositParams.serializeBinaryToWriter
    );
  }
  f = message.getVotingParams();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      sgn_gov_v1_gov_pb.VotingParams.serializeBinaryToWriter
    );
  }
  f = message.getTallyParams();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      sgn_gov_v1_gov_pb.TallyParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 starting_proposal_id = 1;
 * @return {number}
 */
proto.sgn.gov.v1.GenesisState.prototype.getStartingProposalId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
 */
proto.sgn.gov.v1.GenesisState.prototype.setStartingProposalId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Deposit deposits = 2;
 * @return {!Array<!proto.sgn.gov.v1.Deposit>}
 */
proto.sgn.gov.v1.GenesisState.prototype.getDepositsList = function() {
  return /** @type{!Array<!proto.sgn.gov.v1.Deposit>} */ (
    jspb.Message.getRepeatedWrapperField(this, sgn_gov_v1_gov_pb.Deposit, 2));
};


/**
 * @param {!Array<!proto.sgn.gov.v1.Deposit>} value
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
*/
proto.sgn.gov.v1.GenesisState.prototype.setDepositsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sgn.gov.v1.Deposit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.gov.v1.Deposit}
 */
proto.sgn.gov.v1.GenesisState.prototype.addDeposits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sgn.gov.v1.Deposit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
 */
proto.sgn.gov.v1.GenesisState.prototype.clearDepositsList = function() {
  return this.setDepositsList([]);
};


/**
 * repeated Vote votes = 3;
 * @return {!Array<!proto.sgn.gov.v1.Vote>}
 */
proto.sgn.gov.v1.GenesisState.prototype.getVotesList = function() {
  return /** @type{!Array<!proto.sgn.gov.v1.Vote>} */ (
    jspb.Message.getRepeatedWrapperField(this, sgn_gov_v1_gov_pb.Vote, 3));
};


/**
 * @param {!Array<!proto.sgn.gov.v1.Vote>} value
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
*/
proto.sgn.gov.v1.GenesisState.prototype.setVotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sgn.gov.v1.Vote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.gov.v1.Vote}
 */
proto.sgn.gov.v1.GenesisState.prototype.addVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sgn.gov.v1.Vote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
 */
proto.sgn.gov.v1.GenesisState.prototype.clearVotesList = function() {
  return this.setVotesList([]);
};


/**
 * repeated Proposal proposals = 4;
 * @return {!Array<!proto.sgn.gov.v1.Proposal>}
 */
proto.sgn.gov.v1.GenesisState.prototype.getProposalsList = function() {
  return /** @type{!Array<!proto.sgn.gov.v1.Proposal>} */ (
    jspb.Message.getRepeatedWrapperField(this, sgn_gov_v1_gov_pb.Proposal, 4));
};


/**
 * @param {!Array<!proto.sgn.gov.v1.Proposal>} value
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
*/
proto.sgn.gov.v1.GenesisState.prototype.setProposalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sgn.gov.v1.Proposal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.gov.v1.Proposal}
 */
proto.sgn.gov.v1.GenesisState.prototype.addProposals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sgn.gov.v1.Proposal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
 */
proto.sgn.gov.v1.GenesisState.prototype.clearProposalsList = function() {
  return this.setProposalsList([]);
};


/**
 * optional DepositParams deposit_params = 5;
 * @return {?proto.sgn.gov.v1.DepositParams}
 */
proto.sgn.gov.v1.GenesisState.prototype.getDepositParams = function() {
  return /** @type{?proto.sgn.gov.v1.DepositParams} */ (
    jspb.Message.getWrapperField(this, sgn_gov_v1_gov_pb.DepositParams, 5));
};


/**
 * @param {?proto.sgn.gov.v1.DepositParams|undefined} value
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
*/
proto.sgn.gov.v1.GenesisState.prototype.setDepositParams = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
 */
proto.sgn.gov.v1.GenesisState.prototype.clearDepositParams = function() {
  return this.setDepositParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gov.v1.GenesisState.prototype.hasDepositParams = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VotingParams voting_params = 6;
 * @return {?proto.sgn.gov.v1.VotingParams}
 */
proto.sgn.gov.v1.GenesisState.prototype.getVotingParams = function() {
  return /** @type{?proto.sgn.gov.v1.VotingParams} */ (
    jspb.Message.getWrapperField(this, sgn_gov_v1_gov_pb.VotingParams, 6));
};


/**
 * @param {?proto.sgn.gov.v1.VotingParams|undefined} value
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
*/
proto.sgn.gov.v1.GenesisState.prototype.setVotingParams = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
 */
proto.sgn.gov.v1.GenesisState.prototype.clearVotingParams = function() {
  return this.setVotingParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gov.v1.GenesisState.prototype.hasVotingParams = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TallyParams tally_params = 7;
 * @return {?proto.sgn.gov.v1.TallyParams}
 */
proto.sgn.gov.v1.GenesisState.prototype.getTallyParams = function() {
  return /** @type{?proto.sgn.gov.v1.TallyParams} */ (
    jspb.Message.getWrapperField(this, sgn_gov_v1_gov_pb.TallyParams, 7));
};


/**
 * @param {?proto.sgn.gov.v1.TallyParams|undefined} value
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
*/
proto.sgn.gov.v1.GenesisState.prototype.setTallyParams = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gov.v1.GenesisState} returns this
 */
proto.sgn.gov.v1.GenesisState.prototype.clearTallyParams = function() {
  return this.setTallyParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gov.v1.GenesisState.prototype.hasTallyParams = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.sgn.gov.v1);
