# Django Tutorial Application
mysite

## 1. 환경 설정 Set Up

### 1.1. Python 설치 Install Python

### 1.2. 가상환경 생성 Create Virtual Env.
```bash
python -m venv <path>
```
Example
```bash
python -m venv .venv
```

### 1.3. 가상환경 활성화 Activate Virtual Env.
```powershell
.\.venv\Scripts\activate
```

```dos
.venv\Scripts\activate
```

### 1.4. pip 업그레이드 Upgrade pip
```bash
python -m pip install --upgrade pip
```

### 1.5. Django 설치 Install Django
```bash
python -m pip install Django
```

django version
```bash
python -m django --version
```

## 2. 프로젝트 시작 Start Project

### 2.1. 프로젝트 생성 Create Project
```bash
django-admin startproject mysite
```

### 2.2. 프로젝트 실행 Run Project 
```bash
python manage.py runserver
```

### 2.3. 앱 생성 Create App.
```bash
python manage.py startapp <app>
```

### 2.4. 앱 실행에 필요한 데이터베이스 테이블 생성 Create Required Database Tables
```bash
python manage.py migrate
```

### 2.5. 모델의 생성과 데이터베이스 반영 준비
```bash
python manage.py makemigrations <app>
```

### 2.6. SQL 문장 미리보기
```bash
python manage.py sqlmigrate <app> <migration_no>
```

### 2.7. 데이터베이스에 모델 테이블 생성
```bash
python manage.py migrate
```

### 2.8. Django 관리자 생성
```bash
python manage.py createsuperuser
```
