pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.64.1-noble'
      args '--ipc=host'
    }
  }
  environment {
    HOME = "${WORKSPACE}"
  }
  stages {
    stage('Install') {
      steps { sh 'npm ci' }
    }
    stage('Test') {
      steps { sh 'npx playwright test' }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
    }
  }
}