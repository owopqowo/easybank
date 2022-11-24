# easybank
scss 학습을 위한 프로젝트 입니다.
## 문제해결 및 개선
작업을 진행하며 발생한 문제점 및 개선사항을 기록합니다.
### overlay animation 적용
scss에서 animation 관련 코드 작성 후 javascript에서 class를 add / remove로 animation을 제어하였으나 문제 발생\
overlay에 display: none; 이 적용되어 있어 fade out 효과가 제대로 동작하지 않음\
display: none; 을 지우고 visibility: hidden; 을 넣어 숨김처리 변경하여 문제 해결
