pipeline {
    agent any
    stages {
        stage("Clean up"){
            steps {
                deleteDir()
            }
        }
        stage("Build") {
            steps {
                dir("Portfolio_UI") {
                    sh "npm config set registry https://registry.npmjs.org"
                    sh "npm config set fetch-timeout 60000"
                    sh "npm config set fetch-retries 5"
                    sh "npm config set fetch-retry-mintimeout 10000"
                    sh "npm config set fetch-retry-maxtimeout 60000"
                    sh "npm install"
                    sh "npm run build"
                }
            }
        }
    }
}