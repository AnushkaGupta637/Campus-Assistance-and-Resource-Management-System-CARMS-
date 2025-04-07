import { timetableData } from '../data/timetable';
import { facultyData } from '../data/faculty';
import { facilitiesData, messMenu } from '../data/facilities';

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export class ChatbotService {
  private static instance: ChatbotService;
  
  private constructor() {}
  
  public static getInstance(): ChatbotService {
    if (!ChatbotService.instance) {
      ChatbotService.instance = new ChatbotService();
    }
    return ChatbotService.instance;
  }

  async processMessage(message: string): Promise<string> {
    const normalizedMessage = message.toLowerCase();

    if (normalizedMessage.includes('timetable') || normalizedMessage.includes('schedule')) {
      return this.getTimetableResponse();
    }

    if (normalizedMessage.includes('teaching')) {
      const subject = this.extractSubject(message);
      return this.getFacultyForSubject(subject);
    }

    if (normalizedMessage.includes('gym')) {
      return this.getGymStatus();
    }

    if (normalizedMessage.includes('lunch') || normalizedMessage.includes('menu')) {
      return this.getMessMenu();
    }

    return "I'm sorry, I couldn't understand that. Could you please rephrase your question?";
  }

  private getTimetableResponse(): string {
    const schedule = timetableData['CSE-A']['Monday'];
    return `Here's your schedule for today:\n${schedule
      .map(slot => `${slot.time}: ${slot.subject} (${slot.room})`)
      .join('\n')}`;
  }

  private extractSubject(message: string): string {
    const subjects = ['AI', 'Database', 'Web Development'];
    return subjects.find(subject => 
      message.toLowerCase().includes(subject.toLowerCase())
    ) || '';
  }

  private getFacultyForSubject(subject: string): string {
    const faculty = facultyData.find(f => 
      f.subjects.some(s => s.toLowerCase().includes(subject.toLowerCase()))
    );
    return faculty 
      ? `${faculty.name} teaches ${subject}. Office: ${faculty.office}`
      : `I couldn't find information about who teaches ${subject}.`;
  }

  private getGymStatus(): string {
    const gym = facilitiesData.gym;
    return `The gym is currently ${gym.currentStatus}. Hours: ${gym.openTime} - ${gym.closeTime}`;
  }

  private getMessMenu(): string {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'Monday' });
    const lunch = messMenu[today]?.lunch;
    return lunch 
      ? `Today's lunch menu: ${lunch.join(', ')}`
      : "I couldn't fetch today's menu.";
  }
}