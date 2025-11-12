import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LIST } from "@/config/constant";

// 模組級別變數存放 todos
let todos: TodoItem[] = [...DEFAULT_LIST];

// 共用 header
const jsonHeader = { "Content-Type": "application/json; charset=utf-8" };

// GET /api/todos
export async function GET() {
  return NextResponse.json(todos, { headers: jsonHeader });
}

// POST /api/todos
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.title || !body.time) {
    return NextResponse.json(
      { error: "Title and time are required" },
      { status: 400, headers: jsonHeader },
    );
  }

  const newTodo: TodoItem = {
    id: Date.now().toString(),
    title: body.title,
    time: body.time,
    completed: false,
  };

  todos.push(newTodo);
  return NextResponse.json(newTodo, { headers: jsonHeader });
}

// PUT /api/todos?id=123
export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: 400, headers: jsonHeader },
    );
  }

  const body = await req.json();
  todos = todos.map((t) => (t.id === id ? { ...t, ...body } : t));
  const updated = todos.find((t) => t.id === id);

  return NextResponse.json(updated, { headers: jsonHeader });
}

// DELETE /api/todos?id=123
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: 400, headers: jsonHeader },
    );
  }

  todos = todos.filter((t) => t.id !== id);
  return NextResponse.json({ success: true }, { headers: jsonHeader });
}
