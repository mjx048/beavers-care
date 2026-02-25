import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { certificateType, name, phone, emailId, emailDomain, title, content } = body;

    // 필수 항목 검증
    if (!name || !phone || !emailId || !emailDomain || !title || !content) {
      return NextResponse.json({ error: '모든 항목을 입력해주세요.' }, { status: 400 });
    }

    const senderEmail = `${emailId}@${emailDomain}`;

    // Gmail SMTP 트랜스포터 생성
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 이메일 내용 구성
    const mailOptions = {
      from: `"비버스케어 홈페이지" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_TO,
      subject: `[증명서 발급 신청] ${title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            증명서 발급 신청
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">증명서 종류</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${certificateType}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">신청자 이름</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">연락처</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">이메일</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${senderEmail}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">제목</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${title}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">내용</td>
              <td style="padding: 12px; border: 1px solid #ddd; white-space: pre-wrap;">${content}</td>
            </tr>
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            본 메일은 비버스케어 홈페이지를 통해 자동 발송되었습니다.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: '신청이 완료되었습니다.' }, { status: 200 });
  } catch (error) {
    console.error('메일 발송 오류:', error);
    return NextResponse.json({ error: '메일 발송에 실패했습니다. 잠시 후 다시 시도해주세요.' }, { status: 500 });
  }
}

