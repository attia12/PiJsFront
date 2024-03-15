import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LettreDeMotivation } from 'src/schemas/LettreDeMotivation.schema';
import { Meeting } from 'src/schemas/Meeting.schema';
import { AjouterMeetingDto } from './dto/ajouterMeetingdto';

@Injectable()
export class MeetingService {
    constructor(@InjectModel(Meeting.name) private readonly meetingModel:Model<Meeting> ){}
    async addMeeting(ajouterDto:AjouterMeetingDto,id:string) : Promise<Meeting> {
       const meeting = new this.meetingModel({
        lienMeet:ajouterDto.lienMeet,
        dateDebut:ajouterDto.dateDebut,
        time:ajouterDto.time,
        user:id
       });
       return meeting.save();
    }
 
    async findAllByUser(userId: string): Promise<Meeting[]> {
        return this.meetingModel.find({ user: userId }).exec();
      }
}