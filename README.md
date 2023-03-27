## Hi there 👋

<!--

**Here are some ideas to get you started:**

🙋‍♀️ A short introduction - what is your organization all about?
🌈 Contribution guidelines - how can the community get involved?
👩‍💻 Useful resources - where can the community find your docs? Is there anything else the community should know?
🍿 Fun facts - what does your team eat for breakfast?
🧙 Remember, you can do mighty things with the power of [Markdown](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
-->
# <img style="width: 120px; height: 50px" src="https://user-images.githubusercontent.com/93627156/215498284-b1f31fb4-5a48-46b4-85b9-879688bd5ad7.png"/> repaint

# Introduction

사용자가 사진을 올리면 만화 화풍으로 변경해주거나 합성하고 싶은 배경의 사진을 올린다면 배경을 합성해주는 웹사이트 입니다.
갤러리를 통해 변환된 사진 결과를 한 눈에 볼 수 있습니다.
# Demo
![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/93627156/216542160-cb9a9634-15c0-47a8-97da-9d2123fd395b.gif)
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/93627156/216540699-98313ad4-91cd-4d3d-bda3-f7c526a65385.gif)
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/93627156/216540894-764073de-4878-455f-a270-1424bdb5a53c.gif)
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/93627156/216541109-b93c8a0a-7478-4fee-9391-db9b4a71c3a0.gif)
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/93627156/216541210-37679aeb-056a-4314-8f90-0d90eac7ea82.gif)

# System Architecture

![image](https://user-images.githubusercontent.com/93627156/215693158-5abc63db-710a-4155-be51-f7a529c83e85.png)

# Tech Stack
## **:zap: Tech Stack**
```
- Frontend: React / Javascript / axios / module.css
- Backend: Fastapi 
- Web Server: Nginx
- WSGI: uvicorn
- Database: mysql 
- AI : PyTorch / OpenCV
- Deployment: Docker / AWS EC2 / AWS S3
- API Test : Postman
- API Documentation : Swagger
- Version control: Git / Github / Gitkraken
- Development Environment : Visual studio code / colab
- ect : Notion / Slack / Prometheus / Grafana / cAdvisor /
```
|Frontend|Backend|AI|DevOps|Other|
|:------:|:------:|:---:|:----:|:---:|
|![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)<br>![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)<br>![Axios](https://img.shields.io/badge/axios-%5A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)<br>![cssModules](https://img.shields.io/badge/cssModules-000000?style=for-the-badge&logo=cssModules&logoColor=white)|![Python](https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white)<br>![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)<br>![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)<br>![uvicorn](https://img.shields.io/badge/uvicorn-499848?style=for-the-badge&logo=uvicorn&logoColor=white)<br>|![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white)</br>![numpy](https://img.shields.io/badge/numpy-013243?style=for-the-badge&logo=numpy&logoColor=white)<br>![OpenCV](https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white)|</br>![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)<br>![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)<br>![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)|![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)<br>![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)<br>![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)<br>![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)<br>![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)<br>![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)<br>![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)<br>![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)<br>![Cadvisor](https://img.shields.io/badge/Cadvisor-%2320232a.svg?style=for-the-badge&logo=Cadvisor&logoColor=%2361DAFB)
# Installation

```
cd “YOUR_DOWNLOAD_LOCATION”

git clone --recursive https://github.com/22Winter-TeamI/docker.git

## insert configFile 

docker-compose -f docker-compose.yml up -d --build

```

### Setting File


- docker-repo/backend-repo/app/aws_key.py


```python
AWS_ACCESS_KEY_ID = "YOUR_AWS_ACCESS_KEY_ID"
AWS_SECRET_ACCESS_KEY = "YOUR_AWS_SECRET_ACCESS_KEY"

```
# Team Member

| Name    | 조상아                                       |심대석                               | 이수림                                        | 김주원      | 김인철 | 박수연                              |
| ------- | --------------------------------------------- | ------------------------------------ | --------------------------------------------- | --------------------------------------- | -----| ----- |
| Role    |   Frontend   |    Backend, DevOps     | Frontend | Frontend | Frontend,Backend,DevOps | Backend, DevOps |
| Github  | [@sanga](https://github.com/Tesa-github) | [@bigstone0](https://github.com/bigstone0) | [@MELLMA](https://github.com/MELLMA) | [@juwon5272](https://github.com/juwon5272) | [@kimich1218](https://github.com/kimich1218)| [@PARK-Su-yeon](https://github.com/PARK-Su-yeon)|
