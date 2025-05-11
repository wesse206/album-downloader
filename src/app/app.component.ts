import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


export interface Track {
  name: string;
  filename: string;
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule, 
    MatCardModule, MatListModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'album-downloader';
  selectedTrack: Track | null = null;
  @ViewChild('audioplayer') audioPlayer: ElementRef<HTMLAudioElement> | undefined;

  tracks: Track[] = [
  { name: 'Guilty', filename: '01 - Guilty.mp3' },
  { name: 'DUN DUN DUUUUN!!!', filename: '02 - DUN DUN DUUUUN!!!.mp3' },
  { name: 'Intense Interrogation Music', filename: '05 - Intense_Interrogation_Music_(getmp3.pro).mp3' },
  { name: 'Record Scratch', filename: '06 - Record Scratch.mp3' },
  { name: 'La Noyee - Yann Tiersen', filename: '09 - La_Noyee_-_Yann_Tiersen.mp3' },
  { name: 'Thunder and Lightning Sound Effects', filename: '10 - Thunder_and_Lightning_Sound_Effects.mp3' },
  { name: 'La Noyee - Yann Tiersen (Duplicate)', filename: '11 - La_Noyee_-_Yann_Tiersen.mp3' },
  { name: 'Heavenly Angel', filename: '12 - Heavenly Angel.mp3' },
  { name: 'Record Scratch (Duplicate)', filename: '13 - Record Scratch.mp3' },
  { name: 'Heavenly Angel (Duplicate)', filename: '15 - Heavenly Angel.mp3' }
  ];

  changeTrack(selecedTrack: Track){
    this.selectedTrack = selecedTrack;
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.src = selecedTrack.filename;
      this.audioPlayer.nativeElement.load();
      this.audioPlayer.nativeElement.play();
    }
    
  }

  downloadTrack(track: Track) {
    const link = document.createElement('a');
    link.href = track.filename;
    link.download = track.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  constructor() {
    // Initialize the audio player
    this.selectedTrack = this.tracks[0]; // Set the first track as default
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.src = this.selectedTrack.filename;
      this.audioPlayer.nativeElement.load();
    }
  }
  
}
