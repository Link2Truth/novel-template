import Editor from "@/components/novel-editor/editor";
import Menu from "@/components/menu";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
      <div className="flex w-full max-w-(--breakpoint-lg) items-center gap-2 sm:mb-[calc(10vh)]">
        <div className="grow" />
        <Menu />
      </div>
      <Editor />
    </div>
  );
}
