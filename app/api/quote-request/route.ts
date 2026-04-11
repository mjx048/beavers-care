import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, address, solutions, models, notes } = body;

    if (!name || !phone || !address || !solutions || (solutions as string[]).length === 0 || !models || (models as string[]).length === 0) {
      return NextResponse.json({ error: '모든 항목을 입력해주세요.' }, { status: 400 });
    }

    const notesText =
      typeof notes === 'string' && notes.trim().length > 0 ? notes.trim().slice(0, 2000) : '';
    const notesRow =
      notesText.length > 0
        ? `<tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">추가 문의사항</td>
              <td style="padding: 12px; border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(notesText)}</td>
            </tr>`
        : '';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"비버스케어 홈페이지" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_TO,
      subject: `[간편 견적 신청] ${name} - ${phone}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #5b656e; padding-bottom: 10px;">
            간편 견적 신청
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">성명</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">연락처</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">주소</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${address}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">필요 솔루션</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${(solutions as string[]).join(', ')}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">에어컨 모델</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${(models as string[]).join(', ')}</td>
            </tr>
            ${notesRow}
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            본 메일은 비버스케어 홈페이지를 통해 자동 발송되었습니다.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: '견적 신청이 완료되었습니다.' }, { status: 200 });
  } catch (error) {
    console.error('메일 발송 오류:', error);
    return NextResponse.json({ error: '메일 발송에 실패했습니다. 잠시 후 다시 시도해주세요.' }, { status: 500 });
  }
}
