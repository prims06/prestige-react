import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordInput({ id, name, placeholder, value, onChange, autoComplete }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <input
        size={1}
        type={visible ? 'text' : 'password'}
        id={id}
        name={name}
        placeholder={placeholder}
        className="elementor-field elementor-field-textual elementor-size-sm"
        style={{ paddingRight: '2.5rem' }}
        value={value}
        onChange={onChange}
        required
        autoComplete={autoComplete}
      />
      <button
        type="button"
        onClick={() => setVisible(v => !v)}
        aria-label={visible ? 'Hide password' : 'Show password'}
        style={{
          position: 'absolute',
          right: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          color: 'inherit',
          opacity: 0.6,
        }}
      >
        {visible ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </>
  );
}
