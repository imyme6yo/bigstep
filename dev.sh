docker build -t bigstep-web:test . 
# docker run -it -p 7077:3000 -p 9005:9005 -p 7178:4000 -p 7078:4400 -v ${PWD}/web:/web --name ofa-web-01 ofa-web:test ash
docker run -it -p 7077:3000 -v ${PWD}/web:/web --name bigstep-web-01 bigstep-web:test ash