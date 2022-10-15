# Audio to Text Generator

<img align="right" src="https://media.giphy.com/media/uGTWsKzPGxLGw/giphy.gif" width="300" >

## 📃 Features

- Generate text from audio
- Using Deepgram Api
- Extract text from Audio file
- ".wav" type audio file

## ⚔️ Tools Used

- node
- Deepgram Api

## ⚙️ Installation

- Clone the repo

  ```
  https://github.com/sketchomania/deepgram-audio-to-text-converter.git && cd deepgram-audio-to-text-converter
  ```

- Install all dependencies

  ```
  npm install
  ```

- create a .env file
  ```
  touch .env
  ```
- add the followin to ".env" file
  ```bash
  # replace with your Deepgram Key
  DG_KEY = "YOUR_KEY"
  ```

## Run

```
npm start
```

## Output

```txt
WEBVTT

NOTE
Transcription provided by Deepgram
Request Id: xxxxxxx
Created: xxxxx
Duration: xxxxxx
Channels: 1

1
00:00:00.139 --> 00:00:04.921
- This is Peter. This is Johnny. Kenny and joe. We just wanted to take a minute to thank

```

## ⭐ Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome. Thanks a lot.
