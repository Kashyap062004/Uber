const RideSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  pickupLocation: { type: String, required: true },
  dropLocation: { type: String, required: true },
  fare: { type: Number, required: true },
  status: { type: String, enum: ['requested', 'accepted', 'in_progress', 'completed', 'cancelled'], default: 'requested' },
  createdAt: { type: Date, default: Date.now }
});
