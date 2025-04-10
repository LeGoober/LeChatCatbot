import { Component } from '@angular/core';
import { ChatbotService } from '../chatbot.service';
import {faPaperPlane} from "@fontawesome/free-solid-svg-icons";

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  value: string = '';
  messages = [{author: 'bot', content: 'Welcome to the Chatbot'}];
  faPaperPlane = faPaperPlane;

  constructor(private chatService: ChatbotService){}

  sendMessage(){
    if(this.value.trim()){
        this.messages.push({author:'user', content: this.value});
        this.chatService.generateResponse(this.value).subscribe(
          (response) =>{
            this.messages.push({author: 'bot', content: response.generation});
          },
          (error) =>{
            console.error("Error fetching response from backend", error);
          }
        );
        this.value = '';
    }
  }
}
