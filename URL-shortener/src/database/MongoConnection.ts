import mongoose, { ConnectOptions } from 'mongoose';

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(process.env.MONGO_CONNECTION,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                } as ConnectOptions)
            console.log('Database connected');
        } catch (err) {
            console.log(err.message);
            process.exit(1);
        }
    }
}