#!/bin/bash
cd /home/kavia/workspace/code-generation/codequest-94803-a32c73e6/devarena_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

