export default function TextBox(props: TextBoxProps) {
      return (
            <div className="bg-background border-accent_1 border rounded-xl px-1 md:px-7 w-full">
                  <h2 className="text-3xl m-6 sm:ml-0 md:text-4xl md:mt-12">{props.title}</h2>
                  <h3 className="text-xl m-6 sm:ml-0 md:text-xl md:mt-12 text-text">{props.description}</h3>
            </div>
      );
}

type TextBoxProps = {
      title: string;
      description: string;
};
