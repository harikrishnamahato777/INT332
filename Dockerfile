# Use Tomcat base image
FROM tomcat:9.0

# Remove default apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy WAR file
COPY my-webapp/target/my-webapp.war /usr/local/tomcat/webapps/ROOT.war

# Expose container port (Tomcat runs on 8080)
EXPOSE 8080