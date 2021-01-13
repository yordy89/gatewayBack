import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { ContactDTO } from './dto/contact.dto'
import { Contact } from './interface/contact.interface'

@Injectable()
export class ContactService {
    constructor(@InjectModel('Contact') private readonly contactModel: Model<Contact>) { }

    async getContacts(): Promise<Contact[]> {
        const contacts = await this.contactModel.find()
        return contacts
    }

    async createContact(contactDTO: ContactDTO): Promise<Contact> {
        const contact = new this.contactModel(contactDTO)
        return await contact.save()
    }

    async deleteContact(contactId: string): Promise<Contact> {
        const contact = await this.contactModel.findByIdAndDelete(contactId)
        return contact
    }

    async updateContact(contactId: string, contactDTO: ContactDTO): Promise<Contact> {
        const contact = await this.contactModel.findByIdAndUpdate(contactId, contactDTO, {new: true})
        return contact
    }
}
